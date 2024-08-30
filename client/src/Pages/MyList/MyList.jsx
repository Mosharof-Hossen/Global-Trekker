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
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
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