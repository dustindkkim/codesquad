(defvar name (read))

(defun hello(name)
    (format t "Hello ~a! ~%" name)
)

(hello name)