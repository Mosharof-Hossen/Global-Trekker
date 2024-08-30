import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TableRow = ({ data, handleDisplayAfterDelete }) => {
    const { photoUrl, spotName, countryName, userName, description, _id } = data
    console.log(data);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`http://localhost:3000/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                            });
                            handleDisplayAfterDelete(id);
                        }
                    })

            }
        });
    }
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photoUrl}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{spotName}</div>
                        <div className="text-sm opacity-50">{countryName}</div>
                    </div>
                </div>
            </td>
            <td>
                {description.slice(0, 35)} <Link to={`/spot-details/${_id}`}><span className='text-orange-400'>... More</span></Link>
            </td>
            <td>{userName}</td>
            <th className='space-x-2 space-y-2'>
                <Link to={`/update/${_id}`}><button className="px-3 py-2 bg-primary-c text-white rounded">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="px-3 py-2 bg-primary-c text-white rounded">Delete</button>
            </th>
        </tr>
    );
};

TableRow.propTypes = {
    data: PropTypes.object.isRequired
};

export default TableRow;