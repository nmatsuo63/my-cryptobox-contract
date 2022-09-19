require('dotenv').config({ debug: true });
const { secret_key } = process.env
console.log(secret_key);
console.log('test')