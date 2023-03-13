function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yzg5V0O7HM":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyWRpOYpyNboJrODDUMHChC2urfiWZ7JQxQGF2MAc9YKMT4c6drDPw2ClfPNcvrlD15PQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

