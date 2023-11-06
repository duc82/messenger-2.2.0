CREATE TABLE IF NOT EXISTS "token" (
	"id" serial PRIMARY KEY NOT NULL,
	"password_reset_token" text,
	"password_reset_expires" timestamp,
	"user_jd" integer,
	"created_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "token" ADD CONSTRAINT "token_user_jd_user_id_fk" FOREIGN KEY ("user_jd") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
