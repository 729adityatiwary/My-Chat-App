import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",   //token expires in 15 days
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // Days*Hour*Minutes*Seconds* MiliSeconds_format
		httpOnly: true, // prevent XSS attacks or cross-site scripting attacks
		sameSite: "strict", // CSRF attacks or cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;