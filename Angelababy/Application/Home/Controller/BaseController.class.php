<?php
namespace Home\Controller;
use Think\Controller;

class BaseController extends Controller {
	public $cid;
	public $arr;
	public function _initialize() {
		$this->cid = M('cart')->field('cid')->find(['uid' => M('user')->field('uid')->find(['uname' => $_SESSION['uname']])['uid']])['cid'];
		$this->arr = M('cart_detail')->join('meitu_product')->where("cartId=" . $this->cid . " and productId=pid")->select();
		session_start();
		if ($_SESSION['uname']) {
			$this->assign('uname', $_SESSION['uname']);
			$this->assign('arr', $this->arr);
		}
	}
}