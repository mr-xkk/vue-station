export default{
    data(){
        return {
            set:false,
            jq:false,
            ajax:false,
            router:false
      }
    },
    methods: {
      show(){
        this.set = true
      },
      showj(){
        this.jq = true
      },
      showa(){
        this.ajax = true
      },
      showr(){
        this.router = true
      },
      hide(){
        this.set = false;
        this.jq = false;
        this.ajax = false;
        this.router = false
      }
    }
  }