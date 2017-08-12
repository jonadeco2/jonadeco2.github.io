---
layout : login
title: "Login"
permalink: /login/
---
<dl>    
  <div class="container">
    <div class="row">
        <div class="col-lg-12 col-xs-6">
            <img src="../../images/guideme.png" class="logo_login" alt="">
        </div>
        <div class="col-xs-12">
            <form name="login" class="form-signin">
		    <div class="login">
				<input type="text" class="form-control" placeholder="Username" name="userid">
                <br>
				<input type="password" class="form-control" placeholder="Password" name="pswrd">
                <br><br>
				<input type="button" class="btn btn-default btn-block btn-custom" onclick="check(this.form)" value="Login"/>
		    </div>
            </form>
        </div>
    </div>
</div>

<script language="javascript">
function check(form)
{
 
 if(form.userid.value == "admin" && form.pswrd.value == "student")
  {
    window.open('/home/')
  }
 else
 {
   alert("Invalid Login!")
  }
}
</script>

</dl>