import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableRow from "../../Components/TableRow/TableRow";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/spots/${user.email}`)
            .then(res => res.json())
            .then(data => setMyData(data))
    }, [user])
    return (
        <div className="dark:bg-gray-900 dark:text-white p-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold dark:text-white">
                            <th>Name</th>
                            <th>Spot Description</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            myData?.map(data => <TableRow data={data} key={data._id}></TableRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;