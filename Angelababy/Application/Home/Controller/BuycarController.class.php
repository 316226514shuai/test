<?php
namespace Home\Controller;
use Home\Controller\BaseController;
use Think\Page;

class BuycarController extends BaseController {
	public function buycar() {
		$db = M('product');
		$count = $db->count();
		$page = new Page($count, 12);
		$re = $db->limit($page->firstRow, $page->listRows)->select();
		$this->assign('re', $re);
		$this->assign('pageList', $page->show());
		$this->display();
	}
	public function add() {
		$count = M('cart_detail')->field('count')->where(['productId' => $_POST['pid']])->find()['count'];
		if ($count) {
			M('cart_detail')->where(['productId' => $_POST['pid']])->save(['count' => ++$count]);
		} else {
			M('cart_detail')->add(['did' => null, 'cartId' => $this->cid, 'productId' => $_POST['pid'], 'count' => 1]);
		}
	}
	public function select() {
		echo json_encode($this->arr);
	}
	public function delete() {
		$count = M('cart_detail')->where(['productId' => $_POST['pid']])->delete();
		if ($count) {
			echo 'ok';
		} else {
			echo "notok";
		}
	}
}