<?php
namespace Home\Controller;
use Think\Controller;

class LoginController extends Controller {
	public function login() {
		$this->display();
	}
	public function checked() {
		session_start();
		$re = M('user')->where($_POST)->select();
		if ($re) {
			$_SESSION['uname'] = $_POST['uname'];
			echo 'ok';
		} else {
			echo 'notok';
		}
	}
	public function signOut() {
		$_SESSION['uname'] = null;
		echo 'ok';
	}
}