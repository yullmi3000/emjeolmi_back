import dotenv from 'dotenv';
import { verify } from '../../utils/jwtUtils.js';
dotenv.config();

const authJWT = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split('Bearer ') [1]; // header에서 access token을 가져옴
        const result = verify(token); // token 검증
        if (result.ok) { 
            // token 검증 o -> req에 값을 세팅하고, 다음 콜백함수로 
            req.id = result.rid;
            next();
        } else { 
            // 검증에 실패하거나 토큰 만료
            res.status(401).send({
            ok: false,
            message: result.message,
            });
        }
    }
};

export default authJWT;
