function con(x) {
  console.log(x);
}

function mayBeInvoke(func, x, p) {
  if (Math.random() > p) func(x);
  else {
    console.log("op");
  }
}

mayBeInvoke(con, 8, 0.9);
