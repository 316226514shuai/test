<?php
namespace Home\Controller;
use Home\Controller\BaseController;

class UsercenterController extends BaseController {
	public function usercenter() {
		if ($_SESSION['uname']) {
			$this->display();
		} else {
			$this->redirect('Index/index');
		}
	}
}