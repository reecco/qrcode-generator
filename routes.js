import express from 'express';
import qrcode from 'qrcode';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/generate', (req, res) => {
    let content = req.body.content;
    
    qrcode.toDataURL(content, (error, code) => {
        if (error) {
            res.render('error', { error });
        }

        res.render('code', { code, content });
    });
});

router.post('/download', (req, res) => {
    let content = req.body.content;
    
    qrcode.toFile('./qrcode/qrcode.png', content, {
        width: 300,
        height: 300
    }, (error) => {
        if (error) {
            res.render('error', { error });
        }
        res.download('./qrcode/qrcode.png');
    });
});

export default router;