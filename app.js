const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('2')
})

app.get('/health', (_req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error... '
  res.send('ok')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

//random comment for new branch.
//2nd random comment for a second commit
//3rd random commit to see if #minor keyword working or not. #minor if added on comment should increase the minor version

start()
