ALTER TABLE "token" RENAME COLUMN "user_jd" TO "user_id";--> statement-breakpoint
ALTER TABLE "token" DROP CONSTRAINT "token_user_jd_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "token" ADD CONSTRAINT "token_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
