export type SpecDataType = {
  rowData: string[];
  isHead?: boolean;
};
export default function TableRow({ rowData, isHead }: SpecDataType) {
  const className = isHead
    ? "px-6 py-4 text-left font-semibold capitalize"
    : `px-6 py-4 `;
  if (isHead) {
    return (
      <tr>
        {rowData.map((v, i) => (
          <th key={i} className={`${className}`}>
            {v}
          </th>
        ))}
      </tr>
    );
  }
  return (
    <>
      <tr>
        {rowData.map((v, i) => (
          <td
            key={i}
            className={`${className} ${
              rowData.indexOf(v) === 0 ? "font-medium" : "text-gray-300"
            } `}
          >
            {v}
          </td>
        ))}
      </tr>
    </>
  );
}
