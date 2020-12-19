import filesServer from 'simple-files-server'

filesServer({ folder: 'public' }).listen(3000)
