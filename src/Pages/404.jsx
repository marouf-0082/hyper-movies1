import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col my-8 gap-4">
        <h1>404 - Page Not Found</h1>
        <button className="btn primary">
            <Link to="/">Back to Home</Link>
        </button>
    </div>
    
  )
}
