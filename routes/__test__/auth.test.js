const request = require('supertest')
const app = require('../../app')

it('returns 200 on successful regstration' , async() => {
     await request(app)
    .post('/api/v1/auth/register')
    .send({
        name: 'test',
        email: 'admin@gmail.com',
        password: '123456'
    })
    .expect(200)
});

// it('returns 200 on successful login', async () => {
//     await request(app)
//     .post('/api/v1/auth/login')
//     .send({
//         email: 'admin@gmail.com',
//         password: '123456'
//     })
//     .expect(200)
// })







