type statusProps = {
  status: 'loading'|'error'|'success';
};
export const Status = (props: statusProps) => {
let msg;
  if (props?.status === "loading") {
    msg="Loading";
  } else if (props?.status === "success") {
    msg="data fetched";
  } else if (props?.status === "error") {
    msg="error";
  } else {
    msg="";
  }

  return <>
  <h1>{msg}</h1>
  </>
};

