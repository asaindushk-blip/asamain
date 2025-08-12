import { useTable } from "react-table";
import { useMemo } from "react";

const techspec = () => {
    const data = useMemo(
        () => [
            {
                col1: "Hello",
                col2: "World",
                col3: "hehe",
                col4: "lolol",
            },
            {
                col1: "Hello",
                col2: "World",
                col3: "hehe",
                col4: "lolol",
            },
        ],
        []
    );

    const columns = useMemo(
        () => [
            {
                Header: "Type",
                accessor: "col1", // accessor is the "key" in the data
            },
            {
                Header: "Height",
                accessor: "col2",
            },
            {
                Header: "ID (mm)",
                accessor: "col3",
            },
            {
                Header: "OD (mm)",
                accessor: "col4",
            },
        ],
        []
    );
    const tableInstance = useTable({ columns, data });
    const {
        getTableProps,

        getTableBodyProps,

        headerGroups,

        rows,

        prepareRow,
    } = tableInstance;

    return (
        // apply the table props
        <div className="w-5/6 mx-auto my-20">
            <h2 className="my-4 text-4xl">
                Specifications
            </h2>
            <table {...getTableProps()} className="w-3/4 mx-auto my-12">
                <thead className="font-extrabold">
                    {
                        // Loop over the header rows

                        headerGroups.map((headerGroup) => (
                            // Apply the header row props

                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row

                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props

                                        <th
                                            {...column.getHeaderProps()}
                                            className="text-center"
                                        >
                                            {
                                                // Render the header

                                                column.render("Header")
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>

                {/* Apply the table body props */}

                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows

                        rows.map((row) => {
                            // Prepare the row for display

                            prepareRow(row);

                            return (
                                // Apply the row props

                                <tr {...row.getRowProps()}>
                                    {
                                        // Loop over the rows cells

                                        row.cells.map((cell) => {
                                            // Apply the cell props

                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="text-center"
                                                >
                                                    {
                                                        // Render the cell contents

                                                        cell.render("Cell")
                                                    }
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default techspec;
