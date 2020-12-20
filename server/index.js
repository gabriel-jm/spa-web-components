import filesServer from 'simple-files-server'

filesServer({ folder: 'public' }).listen(
  process.env.PORT || 3000
)
