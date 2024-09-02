import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateSpot = () => {
    const loaderData = useLoaderData();
    const { _id, averageCost, countryName, description, location, photoUrl, seasonality, spotName, totalVisitorsPerYear, travelTime, userEmail, userName } = loaderData;
    const { user } = useContext(AuthContext);
    
    const { register, handleSubmit, formState: { errors },  } = useForm();
    console.log(errors);
    const onSubmit = data => {
        data.userEmail = userEmail;
        data.userName = userName;
        fetch(`https://gotravel-silk.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Spot has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {

                    })
                }


            })
            .catch(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Server Problem. Try again.",
                    showConfirmButton: false,
                    timer: 2000
                })
            })
    };
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className="md:mx-20 mx-1 py-10 space-y-10 ">
                <Link to={"/"}><button className="flex items-center gap-1 font-raleway-c text-primary-t-c text-2xl" type="button"> <FaArrowLeft></FaArrowLeft> <span className="">Back To Home</span> </button></Link>
                <div className=" md:px-10 py-10 bg-[#F4F3F0] dark:bg-gray-800 rounded">
                    <div className="text-center md:px-10 px-1 mb-3 space-y-6">
                        <h2 className="font-rancho-c text-4xl font-semibold" >Update Tourist Spot</h2>
                        <p className=" text-gray-500 text-center font-raleway-c">This page allows  to add a new tourist spot by filling out a form with the following details:</p>
                    </div>
                    <div className="px-5 md:px-0 font-raleway-c">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
                                <div className="flex-1">
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">User Email</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" disabled defaultValue={user?.email} type="email" placeholder="Enter User Email"  {...register("userEmail", { maxLength: 80 })} />
                                        {
                                            errors?.userEmail?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">User Email is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">User Name</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" disabled defaultValue={user?.displayName} type="text" placeholder="Enter User Name"  {...register("userName", { maxLength: 80 })} />
                                        {
                                            errors?.userName?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">User Name is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Tourists Spot Name</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={spotName} type="text" placeholder="Enter Name" {...register("spotName", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.spotName?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Tourists Spot Name is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Country Name</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={countryName} type="text" placeholder="Enter Country Name" {...register("countryName", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.countryName?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Country Name is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Location</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={location} type="text" placeholder="Enter Location" {...register("location", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.location?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert"> Location is Required.</p>
                                            )
                                        }
                                    </label>

                                </div>
                                <div className="flex-1">

                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Seasonality</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={seasonality} type="text" placeholder="Enter Seasonality" {...register("seasonality", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.seasonality?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Seasonality is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Travel Time</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={travelTime} type="number" placeholder="Enter Travel Time" {...register("travelTime", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.travelTime?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Travel Time is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Total Visitors Per Year</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={totalVisitorsPerYear} type="number" placeholder="Enter Total Visitors Per Year" {...register("totalVisitorsPerYear", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.totalVisitorsPerYear?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Total Visitors Per Year is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Average Cost</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={averageCost} type="number" placeholder="Enter Average Cost" {...register("averageCost", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.averageCost?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Average Cost is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Photo Url</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" defaultValue={photoUrl} type="text" placeholder="Enter Photo Url" {...register("photoUrl", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.photoUrl?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Photo Url is Required.</p>
                                            )
                                        }
                                    </label>

                                </div>
                            </div>
                            <label className="">
                                <p className="my-2 font-semibold text-xl">Description</p>
                                <textarea rows={5} className="text-justify px-2 py-2 w-full rounded dark:text-black" defaultValue={description} type="" placeholder="Write Description...." {...register("description", { required: true, maxLength: 3000 })} />
                                {
                                    errors?.description?.type === "required" && (
                                        <p className="text-sm mt-1 text-red-500 " role="alert">Description is Required.</p>
                                    )
                                }
                            </label>
                            <input className="text-primary-c font-rancho-c border-2 cursor-pointer border-primary-c text-2xl bg-primary-b-c w-full p-2 mt-8 rounded" type="submit" value={"Update Spot"} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;