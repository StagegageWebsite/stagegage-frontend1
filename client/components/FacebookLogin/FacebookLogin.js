import React from 'react';

export default class FacebookLogin extends React.Component {
   constructor(props) {
      super(props);

      this.FB = props.fb;

      this.state = {
         message: "",
         accessToken: ""
      };

   }

   componentDidMount() {
      this.FB.Event.subscribe('auth.logout',
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange',
         this.onStatusChange.bind(this));
   }

   onStatusChange(response) {
      console.log( response );
      var self = this;

      if( response.status === "connected" ) {
         this.FB.api('/me', function(response) {
            var message = "Welcome " + response.name;
            self.setState({message: message });
         })
         self.setState({accessToken: response.authResponse.accessToken});

        //  var headers = {'Authorization': this.session.content.token}
        // ajax(
        //           type: 'GET',
        //           url: "stagegage.herokuapp.com/artists/",
        //           beforeSend: function (request) {
        //             request.setRequestHeader("Authorization", "Bearer facebook" + self.state.auth_token);
        //           }
        //       });

        //  var oReq = new XMLHttpRequest();
        //  oReq.open("GET", "stagegage.herokuapp.com/artists/", true);
        //  oReq.setRequestHeader("Authorization", "Bearer facebook" + self.state.auth_token);
        //  oReq.onreadystatechange = function () {
        //     if (oReq.readyState == oReq.DONE) {
        //       console.log(oReq.response);
        //     }
        //   }
      }
   }


   onLogout(response) {
      this.setState({
         message: ""
      });
   }

   render() {
      return (
         <div>
            <div
               className="fb-login-button"
               data-max-rows="1"
               data-size="xlarge"
               data-show-faces="false"
               data-auto-logout-link="true"
               >
            </div>
            <div>{this.state.message}</div>
         </div>
      );
   }
};
