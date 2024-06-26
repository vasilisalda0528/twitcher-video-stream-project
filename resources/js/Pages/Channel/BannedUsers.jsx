import __ from "@/Functions/Translate";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FiUserMinus } from "react-icons/fi";
import { FaBan, FaHandSparkles } from "react-icons/fa";
import AccountNavi from "./Partials/AccountNavi";

export default function BannedUsers({ roomBans }) {
    const { auth } = usePage().props;
    // active tab class
    const activeTabClass =
        "text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800";
    const inactiveTabClass =
        "text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";
    return (
        <AuthenticatedLayout>
            <Head title={__("Banned Users")} />

            <div className="lg:flex lg:space-x-10">
                <AccountNavi active="bans" />

                <div className="w-full">

                    <div className="mt-5 p-4 sm:p-8 bg-white w-full dark:bg-zinc-900 shadow sm:rounded-lg">
                        <header>
                            <div className="flex items-start space-x-3">
                                <div>
                                    <FaBan className="w-8 h-8 text-gray-600 dark:text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100">
                                        {__("Banned Users")} ({roomBans.length}
                                        )
                                    </h2>

                                    <p className="mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400">
                                        {__(
                                            "These users can't view your live streams. To ban someone, simply click their username in the live chat."
                                        )}
                                    </p>
                                </div>
                            </div>
                        </header>

                        <hr className="my-5" />

                        {roomBans.length === 0 && (
                            <div className="text-xl dark:text-white text-gray-700 flex items-center space-x-4">
                                <FiUserMinus className="w-10 h-10" />
                                <div>{__("No one is banned from your live streams")}</div>
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row flex-wrap md:items-center">
                            {roomBans.map((ban, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2  mr-5 mb-5"
                                >
                                    <div>
                                        <Link
                                            href={`${ban.user.is_streamer === "yes"
                                                ? route("channel", {
                                                    user: ban.user.username,
                                                })
                                                : ""
                                                }`}
                                        >
                                            <img
                                                src={ban.user.profile_picture}
                                                alt=""
                                                className="rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            className="block text-gray-600 dark:text-gray-300 text-lg font-semibold mt-1"
                                            href={`${ban.user.is_streamer === "yes"
                                                ? route("channel", {
                                                    user: ban.user.username,
                                                })
                                                : ""
                                                }`}
                                        >
                                            {ban.user.name}
                                        </Link>
                                        <Link
                                            className="block text-sky-500 hover:text-sky-700 font-semibold text-sm"
                                            href={`${ban.user.is_streamer === "yes"
                                                ? route("channel", {
                                                    user: ban.user.username,
                                                })
                                                : ""
                                                }`}
                                        >
                                            @{ban.user.username}
                                        </Link>

                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {__("Banned on :date", {
                                                date: ban.banned_at_human,
                                            })}
                                        </p>

                                        <Link href={route("channel.liftUserBan", { roomban: ban.id })} className="text-xs text-rose-600 hover:text-rose-800">
                                            {__("Unban")}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
