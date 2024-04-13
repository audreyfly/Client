const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mssg: 'GET All Blogs' });
});

router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET A SINGLE Blog' });
});

router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new Blog' });
});

router.delete('/:id', (req, res) => {
    res.json({ mssg: 'Delete Blog' });
});

router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Update a Blog' });
});

export default router;
})
