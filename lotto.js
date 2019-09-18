var except = new Array();
var round_history = "";
var num = 1;
for(i=0;i<45;i++)
{
	except[i] = 0;
}
function except_setting(obj,num)
{
	var sum=0;
	
	if(obj.checked)
	{
		except[num] = 1;
	}
	else
	{
		except[num] = 0;
	}
	
	for(i=0;i<45;i++)
	{
		sum += except[i];
	}
	if(sum > 38)
	{
		alert("39개 이상의 숫자를 선택할 수 없습니다.");
		except[num] = 0;
		obj.checked = false;
		return;
	}

}

function check_num(n)
{
	if(n<10)
	{
		return "0" + n;
	}
	else
	{
		return n;
	}
}

function lotto_exec()
{
	var number = new Array();
	for(i=0;i<45;i++)
	{
		if(except[i])
		{
			number[i] = "1-" + check_num(i+1);
		}
		else
		{
			number[i] = Math.random() + "-" + check_num(i+1);
		}
	}

	number.sort();
	var nominee = new Array();
	for(j=0;j<6;j++)
	{
		nominee[j] = number[j].split("-")[1];
	}
	nominee.sort();
	document.getElementById('lotto_result').innerHTML = "<h1>로또 번호 : " + nominee + "</h1>";
	round_history += (num++) + " - " + nominee + "<br>";
	document.getElementById('lotto_history').innerHTML = "<h3> " + round_history + "</h3>";
}