import React from 'react';

const Table = () => {

    return (
        <div className="">
            <table className="w-full bg-inbackground dark:bg-dark-inbackground rounded-md">
                <thead className="">
                    <tr className="text-contenttext dark:text-dark-contenttext">
                        <th className="font-semibold text-xs p-2">ID</th>
                        <th className="font-semibold text-xs p-2">Name</th>
                        <th className="font-semibold text-xs p-2">Email</th>
                        <th className="font-semibold text-xs p-2">City</th>
                        <th className="font-semibold text-xs p-2">State</th>
                        <th className="font-semibold text-xs p-2">Country</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="text-contenttext dark:text-dark-contenttext">
                        <td className="font-semibold text-xs p-2">1</td>
                        <td className="font-semibold text-xs p-2">John Doe</td>
                        <td className="font-semibold text-xs p-2">john.doe@example.com</td>
                        <td className="font-semibold text-xs p-2">New York</td>
                        <td className="font-semibold text-xs p-2">New York</td>
                        <td className="font-semibold text-xs p-2">United States</td>
                    </tr>
                    <tr className="text-contenttext dark:text-dark-contenttext">
                        <td className="font-semibold text-xs p-2">2</td>
                        <td className="font-semibold text-xs p-2">Jane Smith</td>
                        <td className="font-semibold text-xs p-2">jane.smith@example.com</td>
                        <td className="font-semibold text-xs p-2">Los Angeles</td>
                        <td className="font-semibold text-xs p-2">California</td>
                        <td className="font-semibold text-xs p-2">United States</td>
                    </tr>
                    <tr className="text-contenttext dark:text-dark-contenttext">
                        <td className="font-semibold text-xs p-2">3</td>
                        <td className="font-semibold text-xs p-2">Michael Johnson</td>
                        <td className="font-semibold text-xs p-2">michael.johnson@example.com</td>
                        <td className="font-semibold text-xs p-2">Chicago</td>
                        <td className="font-semibold text-xs p-2">Illinois</td>
                        <td className="font-semibold text-xs p-2">United States</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
