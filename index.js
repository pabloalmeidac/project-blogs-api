require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
const { userRouter, loginRouter, categoryRouter, postRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
