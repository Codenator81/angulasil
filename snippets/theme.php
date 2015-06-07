<?php
class A {
    public function swapClass($oldclass, $newclass) {
        if ($this->hasClass($oldclass)) {
            $this->removeClass($oldclass);
            return $this->addClass($newclass);
        }
        return $this;
    }
}
?>