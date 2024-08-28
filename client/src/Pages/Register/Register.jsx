import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaArrowLeft, } from "react-icons/fa6";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className="md:mx-20 mx-5 py-10 space-y-10 ">
                <Link to={"/"}><button className="flex items-center gap-1 font-raleway-c text-primary-t-c text-2xl" type="button"> <FaArrowLeft></FaArrowLeft> <span className="">Back To Home</span> </button></Link>
                <div className=" md:px-10 py-10 bg-[#F4F3F0] dark:bg-gray-800 rounded md:w-2/3 md:mx-auto">
                    <div className="text-center md:px-10 px-1 mb-3 space-y-6">
                        <h2 className="font-rancho-c text-4xl font-semibold" >Register</h2>
                    </div>
                    <div className="px-5 md:px-0 font-raleway-c">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex md:gap-5 gap-0 md:flex-row flex-col">
                                <div className="flex-1">
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Name</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" type="text" placeholder="Enter Your Name"  {...register("name", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.name?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Name is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Email</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" type="email" placeholder="Enter Your Email"  {...register("email", {
                                            required: true, maxLength: 80, pattern: /^\S+@\S+$/i
                                        })} />
                                        {
                                            errors?.email?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Email is Required.</p>
                                            )
                                        }
                                    </label>
                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Password</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" type="text" placeholder="Enter password"  {...register("password", { required: true, maxLength: 80, pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })} />
                                        {
                                            errors?.password?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Password is Required.</p>
                                            )
                                        }
                                        {
                                            errors?.password?.type === "pattern" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Provide Strong password. Minimum one uppercase and lowercase letter and length minimum 6 or more.</p>
                                            )
                                        }
                                    </label>

                                    <label className="">
                                        <p className="my-2 font-semibold text-xl">Photo Url</p>
                                        <input className="px-2 py-2 w-full rounded dark:text-black" type="text" placeholder="Enter Your Photo Url"  {...register("photoUrl", { required: true, maxLength: 80 })} />
                                        {
                                            errors?.photoUrl?.type === "required" && (
                                                <p className="text-sm mt-1 text-red-500 " role="alert">Photo Url is Required.</p>
                                            )
                                        }
                                    </label>


                                </div>
                            </div>
                            <input className="text-primary-c  font-rancho-c border-2 cursor-pointer border-primary-c text-2xl bg-primary-b-c w-full p-2 mt-8 rounded" type="submit" value={"Register"} />
                            <Link></Link>
                        </form>

                        <div>
                            <p className='font-bold text-center my-6'>Already have an Account? ? <Link to={'/login'} className='text-red-500'>Login</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;