
-- Dumping data for table public.history_poins: 0 rows
/*!40000 ALTER TABLE "history_poins" DISABLE KEYS */;
INSERT INTO "history_poins" ("id", "transaction_id", "transaction_date", "type", "poin", "member_no", "createdAt", "updatedAt") VALUES
	(1, 'TRINV/000001/02022024', '2024-03-02 09:07:18+00', NULL, NULL, 1, '2024-03-02 09:07:31+00', '2024-03-02 09:07:32+00'),
	(5, NULL, NULL, 'Earned', 10, 1, '2024-03-02 09:08:10+00', '2024-03-02 09:08:11+00');
/*!40000 ALTER TABLE "history_poins" ENABLE KEYS */;

-- Dumping data for table public.items: 0 rows
/*!40000 ALTER TABLE "items" DISABLE KEYS */;
INSERT INTO "items" ("id", "name", "price", "quantity", "sub_total", "transaction_id", "createdAt", "updatedAt") VALUES
	(1, 'sabun', 10000, 2, 20000, 'TRINV/000001/03022024', '2024-03-02 12:25:44.8+00', '2024-03-02 12:25:44.8+00'),
	(2, 'sabun', 10000, 2, 20000, 'TRINV/000001/03022024', '2024-03-02 12:28:24.627+00', '2024-03-02 12:28:24.627+00'),
	(3, 'sabun', 10000, 2, 20000, 'TRINV/000001/03022024', '2024-03-02 12:30:34.122+00', '2024-03-02 12:30:34.122+00'),
	(4, 'sampo', 5000, 1, 5000, 'TRINV/000001/03022024', '2024-03-02 12:30:34.36+00', '2024-03-02 12:30:34.36+00'),
	(5, 'sabun', 10000, 2, 20000, 'TRINV/129391/03022024', '2024-03-02 12:38:48.836+00', '2024-03-02 12:38:48.836+00'),
	(6, 'sampo', 5000, 1, 5000, 'TRINV/129391/03022024', '2024-03-02 12:38:49.06+00', '2024-03-02 12:38:49.06+00');
/*!40000 ALTER TABLE "items" ENABLE KEYS */;

-- Dumping data for table public.memberships: 0 rows
/*!40000 ALTER TABLE "memberships" DISABLE KEYS */;
INSERT INTO "memberships" ("id", "member_no", "name", "email", "phone_no", "birth_date", "address", "join_date", "referral", "earned_point", "redeemed_point", "remained_point", "status", "createdAt", "updatedAt") VALUES
	(1, '1', 'Budi Pangestu', 'budi.pangestu@tes.local', '081888777999', '1990-03-02 08:04:02+00', 'jl kaliurang', '2023-03-02 08:04:20+00', 'TX23', 10, 100, 110, 'true', '2024-03-02 08:05:03+00', '2024-03-02 08:05:07+00'),
	(3, '2', 'Jono Sudarso', 'jono.sudarso@tes.local', '081888777000', '1990-03-02 08:04:02+00', 'jl kaliurang', '2023-03-02 08:04:20+00', 'TX23', 10, 100, 110, 'true', '2024-03-02 08:05:03+00', '2024-03-02 08:05:07+00');
/*!40000 ALTER TABLE "memberships" ENABLE KEYS */;

-- Dumping data for table public.tier_managements: 0 rows
/*!40000 ALTER TABLE "tier_managements" DISABLE KEYS */;
INSERT INTO "tier_managements" ("id", "tier_name", "min_poin", "max_poin", "createdAt", "updatedAt") VALUES
	(2, 'string', 0, 0, '2024-03-02 15:01:09.75+00', '2024-03-02 15:01:09.75+00');
/*!40000 ALTER TABLE "tier_managements" ENABLE KEYS */;

-- Dumping data for table public.transactions: 0 rows
/*!40000 ALTER TABLE "transactions" DISABLE KEYS */;
INSERT INTO "transactions" ("id", "member_no", "name", "email", "phone_no", "total_amount", "transaction_date", "transaction_id", "createdAt", "updatedAt") VALUES
	(2, 1, 'Budi Pangestu', 'budi.pangestu@tes.local', '081888777999', 50000, '2024-03-02 09:03:50+00', 'TRINV/000001/02022024', '2024-03-02 09:04:25+00', '2024-03-02 09:04:26+00'),
	(10, 1, 'BudiPangestu', 'budi.pangestu@tes.local', '081888777999', 25000, '2024-03-02 12:30:34.107+00', 'TRINV/000001/03022024', '2024-03-02 12:30:34.565+00', '2024-03-02 12:30:34.565+00'),
	(11, 1, 'Budi Pangestu', 'budi.pangestu@tes.local', '081888777999', 25000, '2024-03-02 12:38:48.821+00', 'TRINV/129391/03022024', '2024-03-02 12:38:49.201+00', '2024-03-02 12:38:49.201+00');
/*!40000 ALTER TABLE "transactions" ENABLE KEYS */;

-- Dumping data for table public.users: 0 rows
/*!40000 ALTER TABLE "users" DISABLE KEYS */;
INSERT INTO "users" ("id", "email", "password", "createdAt", "updatedAt") VALUES
	(1, 'mawar@tes.local', 'mawar123', '2024-03-01 16:15:05+00', '2024-03-01 16:15:06+00');
/*!40000 ALTER TABLE "users" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
