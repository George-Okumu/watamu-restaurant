import ClipLoader from 'react-spinners/ClipLoader'

export default function Spinner() {
  return (
    <>
      <div style={{ width: "100px", margin: "auto", paddingTop: "8rem", display: "block" }}>
        <ClipLoader color="#f1cc17" size={100} />
      </div>
    </>
  );
}
