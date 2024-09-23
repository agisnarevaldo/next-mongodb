import {addPost} from "@/action/action";

export default function Home() {
    return (
        <div className="max-w-screen-sm m-auto flex flex-col justify-center items-center min-h-screen">
            <form
                action={ addPost }
                className="flex flex-col gap-4 border p-4 rounded-lg border-gray-400"
            >
                <div className="flex justify-between gap-4">
                    <label
                        htmlFor="title"
                        className="w-1/4"
                    >
                        Title
                    </label>
                    <input
                        className="bg-gray-400 w-52 rounded-lg p-2"
                        type="text" id="title"
                        name="title"
                    />
                </div>
                <div className="flex justify-between gap-4">
                    <label
                        htmlFor="description"
                        className="w-1/4"
                    >
                        Description
                    </label>
                    <textarea
                        className="bg-gray-400 w-52 rounded-lg p-2"
                        id="description"
                        name="description"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 p-2 text-white rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
