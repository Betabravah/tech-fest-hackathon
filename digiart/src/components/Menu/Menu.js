import { Button } from "@mui/material"

const Menu = () => {
    return (
        <div className="menu">
            <Button Popular/>
            <div>
                <ul>
                    <li>All</li>
                    <li>Animation</li>
                    <li>Branding</li>
                    <li>Illustrations</li>
                    <li>Mobile</li>
                    <li>Print</li>
                    <li>Product Design</li>
                    <li>Typography</li>
                    <li>Web Design</li>
                </ul>
            </div>
        </div>
    )
}
export default Menu;