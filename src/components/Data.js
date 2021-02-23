export default function Data(props) {
  return (
    <>
      {/* filling up the table rows with user info */}
      {props.employees.map((result) => (
        <tr key={result.login.uuid}>
          <td>
            <img src={result.picture.medium} alt={result.name.first} />
          </td>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date}</td>
        </tr>
      ))}
    </>
  );
}
