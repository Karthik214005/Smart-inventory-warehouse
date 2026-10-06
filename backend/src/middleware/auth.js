const jwt=require('jsonwebtoken');
function auth(req,res,next){const h=req.headers.authorization;if(!h)return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(h.split(' ')[1],process.env.JWT_SECRET||'dev-secret');next()}catch(e){res.status(401).json({message:'Invalid or expired token'})}}
function roles(...allowed){return (req,res,next)=>allowed.includes(req.user.role)?next():res.status(403).json({message:'Insufficient permissions'})}
module.exports={auth,roles};
