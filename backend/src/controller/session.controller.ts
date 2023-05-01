import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

const accessTokenTtl = config.get<string>("accessTokenTtl");
const refreshTokenTtl = config.get<string>("refreshTokenTtl");

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the user`s password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  // create session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: accessTokenTtl } // 15 minutes
  );

  // create an refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: refreshTokenTtl } // 1 year
  );

  // return access and refresh token
  return res.send({ accessToken, refreshToken });
}
