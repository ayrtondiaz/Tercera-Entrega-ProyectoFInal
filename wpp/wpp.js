const twilio = require('twilio');
const logger = require('../logs/reqLogger')

const accountSid = "AC6e928194b620b05a234f2d14bbe5053e"
const authToken = "5e469a78faa24d37a6f545c10748413e"


const client = twilio(accountSid, authToken);

function sendWpp(dat1, dat2, prod) {
  try {
    client.messages.create({
      body: `Compra de: ${dat1}, mail: ${dat2}, productos: ${prod}`,
      from: 'whatsapp:+17657198404',       
      to: 'whatsapp:+3874864867'
    })
  } catch (error) {
    logger.error(error)
  }
}

function wppComprador(num){
    try {
        client.messages.create({
        body: `Su pedido ha sido recibido, se encuentra en proceso`,
        from: 'whatsapp:+17657198404',       
        to: `whatsapp:+${num}`
        })
    } catch (error) {
        logger.error(error)
    }
}

module.exports = { sendWpp, wppComprador }