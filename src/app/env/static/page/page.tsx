export default function Page() {
  return (
    <table>
      <tbody>
        <tr>
          <th>ENV_A</th>
          <td>{process.env.ENV_A}</td>
        </tr>
        <tr>
          <th>ENV_B</th>
          <td>{process.env.ENV_B}</td>
        </tr>
      </tbody>
    </table>
  );
}
