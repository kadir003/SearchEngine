grunt.initConfig({
  deploy: {
    liveservers: {
      options:{
        servers: [{
          host: '139.59.139.4',
          port: 22,
          username: 'root',
          password: '2Er8p8$^[sU.!bx)'
        }],
        cmds_before_deploy: ["some cmds you may want to exec before deploy"],
        cmds_after_deploy: ["forever restart", "some other cmds you want to exec after deploy"],
        deploy_path: 'your deploy path in server'
      }
    }
  },
})