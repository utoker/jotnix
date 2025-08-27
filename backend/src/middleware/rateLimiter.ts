import type { Request, Response, NextFunction } from "express";
import ratelimit from "../config/upstash.ts";



const rateLimiter = async (req:Request, res: Response, next: NextFunction) => {
try {
    const { success } = await ratelimit.limit("my-limit-key"); // TODO base on user id later
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    console.log("Rate limiting error:", error);
    return res.status(500).json({ message: "Internal server error" });  
}   
}
export default rateLimiter;