use myEStore
go

INSERT INTO Account (UserName, Password, FullName, Email, PhoneNumber, Address, Role)
VALUES 
('admin', 'adminpass', 'Admin User', 'admin@example.com', '123-456-7890', '123 Admin Street, Admin City', 'admin');

INSERT INTO Product (ProductName, Description, Price, Stock, Category, Brand, Color)
VALUES 
    (N'Smart Tivi QLED 4K 55 inch Samsung QA55Q60C', N'Tinh giản trong thiết kế, khung hình 55 inch với độ phân giải 4K sắc nét, bộ xử lý Quantum 4K Lite, công nghệ OTS Lite mang đến trải nghiệm hình ảnh và âm thanh chân thật, hệ điều hành Tizen™ giao diện trực quan dễ sử dụng, tìm kiếm bằng giọng nói tiếng Việt', 15900000, 50, 'Tivi', 'Samsung', N'Đen'),
    (N'Smart Tivi NanoCell LG 4K 55 inch 55NANO76SQA', N'Smart Tivi NanoCell LG 4K 55 inch 55NANO76SQA, một tuyệt tác đến từ LG với thiết kế đơn giản, tinh tế, tái hiện sống động cuộc sống thực lên màn hình 4K trên dải màu Nano Color, tối ưu hiển thị và âm thanh nhờ bộ xử α5 Gen5 AI 4K, AI Sound Pro tinh chỉnh âm thanh lôi cuốn, cùng mang lại trải nghiệm nghe nhìn hoàn hảo trên các lựa chọn phong phú từ hệ điều hành WebOS 22.', 11990000, 50, 'Tivi', 'LG', N'Đen'),
    (N'Smart Tivi LG 4K 65 inch 65UQ8000PSC', N'Smart Tivi LG 4K 65 inch 65UQ8000PSC mang đến cảm xúc đắm chìm khi trải nghiệm nghe nhìn, với khung hình 4K tương phản rực rỡ từ HDR10 Pro, âm thanh chân thực tinh chỉnh theo nội dung qua AI Sound, cùng với 1 thiết kế tinh giản đầy sang chảnh, và kho ứng dụng khổng lồ từ webOS 22 đáp ứng hoàn hảo nhu cầu giải trí của người dùng.', 15890000, 50, 'Tivi', 'LG', N'Đen'),
	(N'Google Tivi TCL 4K 55 inch 55P636', N'Google Tivi TCL 4K 55 inch 55P635 cho trải nghiệm xem tuyệt vời với thiết kế tràn viền, hình ảnh chất lượng 4K sắc nét, công nghệ HDR10 cho hình ảnh chi tiết, công nghệ Smart HDR hiển thị khung hình sống động, chế độ Game Mode giúp hiển thị các màn game mượt mà, công nghệ Dolby Audio tái tạo âm thanh mạnh mẽ, trung thực, Google Assistant hỗ trợ tiếng Việt, gọi video miễn phí qua màn hình tivi với Google Duo.', 7990000, 50, 'Tivi', 'TCL', N'Đen'),
	(N'Google Tivi Sony 4K 75 inch KD-75X77L', N'Google Tivi Sony 4K 75 inch KD-75X77L sở hữu kích thước màn hình lên đến 75 inch, đường viền mỏng, khung hình sắc nét, sang trọng cùng với bộ xử lý X1 4K nâng cao chất lượng hình ảnh. Công nghệ âm thanh vòm Dolby Audio cùng với bộ khuếch đại âm thanh S-Master Digital Amplifier loại bỏ tiếng ồn, độ nhiễu. Hệ điều hành Google TV với kho ứng dụng phong phú, giúp cho bạn phút giây giải trí thoải mái.', 27990000, 30, 'Tivi', 'Sony', N'Đen'),
	
	(N'Máy lạnh Nagakawa Inverter 1 HP NIS-C09R2T28', N'Máy lạnh Nagakawa Inverter 1 HP NIS-C09R2T28 có khả năng làm lạnh nhanh nhưng vẫn đảm bảo được hiệu quả tiết kiệm điện. Hơn nữa, mẫu máy lạnh này còn có thể hút ẩm độc lập, giúp căn phòng trở nên khô thoáng cho những ngày trời ẩm ướt.', 5990000, 60, 'May Lanh', 'Nagakawa', N'Trắng'),
	(N'Máy lạnh Casper Inverter 1 HP TC-09IS35', N'Máy lạnh Casper Inverter 1 HP TC-09IS35 cho khả năng làm mát hiệu quả với chế độ làm lạnh nhanh Turbo, tự động điều chỉnh nhiệt độ với cảm biến nhiệt độ iFeel, sử dụng tiết kiệm điện với công nghệ I-saving, tăng tuổi thọ thiết bị với chức năng tự làm sạch iClean.', 6490000, 50, 'May Lanh', 'Casper', N'Trắng'),
	(N'Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V', N'Máy lạnh Toshiba Inverter 1 HP RAS-H10Z1KCVG-V làm lạnh tức thì với chế độ Hi Power, đảm bảo thiết bị hoạt động mượt mà, làm lạnh ổn định, tuổi thọ cao với công nghệ Hybrid Inverter, chế độ Eco, giữ không khí trong lành, ngăn vi khuẩn, nấm mốc phát triển với công nghệ Magic Coil, bộ lọc chống nấm mốc.', 9290000, 35, 'May Lanh', 'Toshiba', N'Trắng'),
	(N'Máy lạnh TCL Inverter 1 HP TAC-10CSD/XAB1I', N'Máy lạnh TCL Inverter 1 HP TAC-10CSD/XAB1I được trang bị nhiều tính năng như bộ lọc HD giúp lọc sạch không khí. Trang bị công nghệ Eco, AI Inverter nên tiết kiệm điện năng hiệu quả với chỉ số hiệu suất năng lượng 4.54. Ngoài ra còn đa dạng các tiện ích khác.', 5990000, 50, 'May Lanh', 'TCL', N'Trắng'),
	(N'Máy lạnh Funiki Inverter 1 HP HIC09TMU.ST3', N'Máy lạnh Funiki 1HP HIC09TMU.ST3 sở hữu công nghệ Inverter giúp tiết kiệm điện năng, chế độ làm lạnh nhanh Turbo giúp tăng tốc làm lạnh, người dùng sẽ không mất quá nhiều thời gian để đạt được mức nhiệt độ mình mong muốn.', 6290000, 50, 'May Lanh', 'Funiki', N'Trắng'),
	
	(N'Tủ lạnh Panasonic Inverter 550 lít Multi Door NR-DZ601VGKV', N'Tủ lạnh Panasonic 550 lít NR-DZ601VGKV có ngăn đông mềm với nhiệt độ -3°C, phù hợp để bảo quản thực phẩm tươi sống mà không làm đông đá. Được thiết kế dạng ngăn kéo riêng biệt và công nghệ Blue Ag+ nên có thể tránh lẫn mùi với thực phẩm khác. Nhờ vậy, giữ trọn hương vị và độ tươi ngon, bạn có thể lấy ra nấu ăn ngay mà không cần tốn thời gian rã đông.', 24990000, 50, 'Tu Lanh', 'Panasonic', N'Đen'),
	(N'Tủ lạnh LG Inverter 470 lít Multi Door GR-B50BL', N'Tủ lạnh LG Inverter 470 lít GR-B50BL là sự lựa chọn hoàn hảo cho những gia đình đông thành viên. Với dung tích sử dụng rộng rãi 470 lít, mẫu tủ lạnh cỡ lớn French Door được thiết kế nhiều ngăn - khay - kệ - hộc bên trong. Mặc dù có dung tích lớn nhưng tủ tiết kiệm điện nhờ sở hữu công nghệ Smart Inverter và hàng loạt công nghệ tiên tiến khác được trang bị cho chiếc tủ lạnh này.', 16690000, 50, 'Tu Lanh', 'LG', N'Xám'),
	(N'Tủ lạnh LG Inverter 519 lít Side By Side GR-B256JDS', N'Tủ lạnh LG Inverter 519 lít GR-B256JDS thuộc dòng tủ lạnh side by side được trang bị công nghệ Smart Inverter giúp tiết kiệm điện năng. Bên cạnh đó, công nghệ làm lạnh đa chiều mang hơi lạnh lan tỏa khắp các ngăn.', 13490000, 35, 'Tu Lanh', 'LG', N'Xám'),
	(N'Tủ lạnh Aqua Inverter 456 lít Multi Door AQR-M525XA(FB)', N'Tủ lạnh Aqua Inverter 456 lít AQR-M525XA(FB) thiết kế có thể bảo quản thực phẩm khô và ẩm riêng biệt nhờ công nghệ cân bằng độ ẩm HCS, giúp duy trì được độ tươi ngon cũng như kéo dài thời gian bảo quản thực phẩm lâu hơn. Chưa hết, tủ lạnh này còn có khả năng tiết kiệm điện và khử mùi hôi tối ưu.', 14990000, 50, 'Tu Lanh', 'Aqua', N'Đen'),
	(N'Tủ lạnh Samsung Inverter 655 lít Side By Side RS62R5001M9/SV', N'Tủ lạnh Samsung Inverter 655 lít RS62R5001M9/SV có thiết kế kiểu tủ lạnh side by side đẳng cấp, đi cùng gam màu bạc sang trọng, thời thượng, tủ lạnh sẽ là điểm nhấn nổi bật, mang lại cho không gian nội thất của gia đình một vẻ đẹp hiện đại.', 15890000, 35, 'Tu Lanh', 'Samsung', N'Xám'),

	(N'Máy giặt Panasonic Inverter giặt 9.5 kg - sấy tiện ích 2 kg NA-V95FC1LVT', N'Hệ thống ActiveFoam,Giặt nước nóng ,StainMaster+Cảm biến Econavi,Công nghệ AI Smart Wash', 12290000, 50, 'May Giat', 'Panasonic', N'Xám'),
	(N'Máy giặt Toshiba 7 Kg AW-L805AV (SG)', N'Mâm giặt 864 lỗ tạo tia nước phun ngược ngăn quần áo chạm vào mâm,Lồng giặt ngôi sao pha lê,Công nghệ suy luận ảo Fuzzy Logic,Chức năng tự cân chỉnh tiết kiệm nước,Chuyển động giặt đảo chiều gỡ rối quần áo', 3990000, 50, 'May Giat', 'Toshiba', N'Xám'),
	(N'Máy giặt Toshiba 8 kg AW-M905BV(MK)', N'Máy giặt Toshiba 8kg AW-M905BV(MK) thuộc kiểu máy giặt cửa trên – lồng đứng sang trọng, giặt sạch quần áo và giảm thiểu hư tổn sợi vải với lồng giặt ngôi sao pha lê, tự động kiểm tra lượng đồ giặt và cân chỉnh mức nước nhờ công nghệ suy luận ảo Fuzzy Logic.', 4990000, 50, 'May Giat', 'Toshiba', N'Đen'),
	(N'Máy giặt Panasonic 8.2 kg NA-F82Y01DRV', N'Máy giặt Panasonic 8.2 kg NA-F82Y01DRV thuộc dòng máy giặt cửa trên có thiết kế thanh lịch và hiện đại. Tích hợp đa dạng các công nghệ như hệ thống ActiveFoam đánh bay vết bẩn cứng đầu, giặt siêu sạch tăng khả năng loại bỏ vết bẩn.', 4290000, 50, 'May Giat', 'Panasonic', N'Xám'),
	(N'Máy giặt Samsung Inverter 12 kg WA12CG5745BVSV', N'Máy giặt Samsung Inverter 12 kg WA12CG5745BVSV có khả năng đánh bay vết bẩn cứng đầu hiệu quả nhờ công nghệ giặt bong bóng siêu mịn Eco Bubble, công nghệ Digital Inverter tiết kiệm điện năng, vận hành êm ái đảm bảo hiệu quả sạch sâu.', 6990000, 50, 'May Giat', 'Samsung', N'Đen'),

	(N'Quạt đứng Senko 5 cánh DTS1609 60W', N'Quạt đứng Senko DTS1609 có chân đế vững tránh đổ ngã, cánh quạt với đường kính lớn cho quạt làm mát hiệu quả hơn, thay đổi được chiều cao quạt, sử dụng động cơ bạc thau giúp quạt hoạt động bền bỉ, ít bị ăn mòn.', 510000, 50, 'Gia Dung', 'Senko', N'Đen'),
	(N'Máy ép chậm Kangaroo KG1B8', N'Lưu giữ nhiều vitamin, dưỡng chất trong rau củ quả nhờ công nghệ ép chậm hiện đại. Ép hiệu quả, hoạt động êm ái với công suất 180W, độ ồn thấp dưới 75 dB. Ống tiếp nguyên liệu đường kính 40 mm ép được trái cây nhỏ nguyên trái. Thời gian hoạt động kéo dài đến 20 phút. Trục ép bằng nhựa Tritan không chứa BPA, an toàn cho sức khỏe. Dùng an toàn với chân đế cao su chống trượt, tính năng tự ngắt khi quá tải.', 1990000, 50, 'Gia Dung', 'Kangaroo', N'Đen'),
	(N'Lò chiên không dầu Sunhouse Mama SHD4088 15 lít', N'Vỏ bằng nhựa PP,Khoang lò bằng inox,Xiên quayVỉ nướng,Tay cầm,Khay xiên quay,Khay nướng,Giỏ quay', 1990000, 50, 'Gia Dung', 'Sunhouse', N'Đen'),
	(N'Bình đun siêu tốc Delites 1.8 lít ST18S06', N'Bình đun siêu tốc Delites kiểu dáng đơn giản, gọn đẹp, dễ dùng trong mọi không gian', 145000, 100, 'Gia Dung', 'Delites', N'Đen'),
	(N'Máy xay sinh tố đa năng Philips HR2041/10 - 2 cối ', N'Máy xay sinh tố Philips HR2041/10 thiết kế độc đáo, hiện đại, màu sắc nhã nhặn, xay được nhiều loại thực phẩm khác nhau, đáp ứng nhu cầu cơ bản của cá nhân hoặc gia đình.', 630000, 50, 'Gia Dung', 'Philips', N'Trắng'),

	(N'Máy lọc nước RO nóng nguội lạnh Karofi KAD-X60 10 lõi', N'Máy lọc nước RO nóng nguội lạnh Karofi KAD-X60 có 2 vòi, 3 chế độ nước nóng - nguội - lạnh tiện dụng, làm nóng nước tức thời, lõi lọc thế hệ mới sử dụng công nghệ Smax Pro độc quyền cùng van chuyên dụng lấy được nước khi mất điện là sự lựa chọn hữu dụng cho gia đình bạn.', 8990000, 50, 'May Loc Nuoc', 'Karofi', N'Đen'),
	(N'Máy lọc nước RO nóng nguội lạnh Karofi KAD-X56 11 lõi', N'Máy lọc nước RO nóng nguội lạnh Karofi KAD-X56 trang bị 11 lõi lọc, màng lọc RO Purifim 100 GPD sản xuất tại Mỹ đảm bảo chất lượng, công nghệ kháng khuẩn Nano Silver cùng nhiều tiện ích như: ngừng hoạt động khi áp lực nước thấp, tự động xả nước thải,... đây chắc chắn là một thiết bị lọc nước nên có mặt trong mọi gia đình.', 8290000, 50, 'May Loc Nuoc', 'Karofi', N'Đen'),
	(N'Máy lọc nước RO nóng nguội lạnh Hydrogen Kangaroo KG12A8 12 lõi ', N'Máy lọc nước RO nóng nguội lạnh Hydrogen Kangaroo KG12A8 12 lõi được trang bị hệ thống làm lạnh Block, công nghệ kháng khuẩn Nano Carbon hiện đại, sử dụng lõi RO Vortex 100 GPD sản xuất tại Hàn Quốc, công suất lọc lớn giúp lọc nước hiệu quả.', 10690000, 50, 'May Loc Nuoc', 'Kangaroo', N'Đen'),
	(N'Máy lọc nước RO nóng nguội lạnh Sunhouse SHA76219CK 10 lõi', N'Máy lọc nước RO nóng nguội lạnh Sunhouse SHA76219CK với 10 lõi lọc, máy có màng lọc RO DUPONT FilmTec 50 GPD sản xuất tại Mỹ đảm bảo chất lượng, công nghệ làm lạnh Block cho nước lạnh sâu nhanh chóng, người dùng dễ dàng chọn chế độ nước bằng nút vặn dễ dùng, ngoài ra còn đi kèm các tiện ích như tự động ngừng hoạt động khi áp lực nước thấp, tự động xả nước thải,...', 7990000, 50, 'May Loc Nuoc', 'Sunhouse', N'Đen'),
	(N'Máy lọc nước RO ROBOT SPRING-X10GUR 10 lõi', N'Máy lọc nước RO ROBOT SPRING-X10GUR 10 lõi thiết kế dạng tủ đứng, tích hợp 2 công nghệ lọc UF và RO cùng công nghệ RMC hiện đại được thiết kế độc quyền bởi ROBOT.', 4720000, 50, 'May Loc Nuoc', 'ROBOT', N'Đen');

	INSERT INTO ProductImage (ProductID,ImageURL)
VALUES 
		(1, 'https://cdn.tgdd.vn/Products/Images/1942/303225/Slider/vi-vn-smart-tivi-qled-4k-55-inch-samsung-qa55q60c-1.jpg'),
		(1, 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-2.jpg'),
		(1, 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-3.jpg'),
		(1, 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-4-180x120.jpg'),
		(1, 'https://cdn.tgdd.vn/Products/Images/1942/303225/smart-tivi-qled-4k-55-inch-samsung-qa55q60c-5.jpg'),

		(2, 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-10.jpg'),
		(2, 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-1-2.jpg'),
		(2, 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-2-2.jpg'),
		(2, 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-3-2.jpg'),
		(2, 'https://cdn.tgdd.vn/Products/Images/1942/278576/smart-nanocell-lg-4k-55-inch-55nano76sqa-6.jpg'),

		(3, 'https://cdn.tgdd.vn/Products/Images/1942/278555/smart-lg-4k-65-inch-65uq8000psc-01.jpg'),
		(3, 'https://cdn.tgdd.vn/Products/Images/1942/278555/smart-lg-4k-65-inch-65uq8000psc-02.jpg'),
		(3, 'https://cdn.tgdd.vn/Products/Images/1942/278555/smart-lg-4k-65-inch-65uq8000psc-03.jpg'),
		(3, 'https://cdn.tgdd.vn/Products/Images/1942/278555/smart-lg-4k-65-inch-65uq8000psc-04.jpg'),
		(3, 'https://cdn.tgdd.vn/Products/Images/1942/278555/smart-lg-4k-65-inch-65uq8000psc-05.jpg'),

		(4, 'https://cdn.tgdd.vn/Products/Images/1942/281936/google-tcl-4k-55-inch-55p635-9.jpg'),
		(4, 'https://cdn.tgdd.vn/Products/Images/1942/281936/google-tcl-4k-55-inch-55p635-1.jpg'),
		(4, 'https://cdn.tgdd.vn/Products/Images/1942/281936/google-tcl-4k-55-inch-55p635-2.jpg'),
		(4, 'https://cdn.tgdd.vn/Products/Images/1942/281936/google-tcl-4k-55-inch-55p635-3.jpg'),
		(4, 'https://cdn.tgdd.vn/Products/Images/1942/281936/google-tcl-4k-55-inch-55p635-5.jpg'),

		(5, 'https://cdn.tgdd.vn/Products/Images/1942/308366/x77l.jpg'),
		(5, 'https://cdn.tgdd.vn/Products/Images/1942/308366/Slider/google-tivi-sony-4k-75-inch-kd-75x77l638239966698200322.jpg'),
		(5, 'https://cdn.tgdd.vn/Products/Images/1942/308366/Slider/google-tivi-sony-4k-75-inch-kd-75x77l638239966697180351.jpg'),
		(5, 'https://cdn.tgdd.vn/Products/Images/1942/308366/Slider/google-tivi-sony-4k-75-inch-kd-75x77l638239966696300345.jpg'),
		(5, 'https://cdn.tgdd.vn/Products/Images/1942/308366/x77l-1.jpg'),

		(6, 'https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t281.jpg'),
		(6, 'https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t282.jpg'),
		(6, 'https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t283-1.jpg'),
		(6, 'https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t284-1.jpg'),
		(6, 'https://cdn.tgdd.vn/Products/Images/2002/299824/may-lanh-nagakawa-inverter-1-hp-nis-c09r2t285-1.jpg'),

		(7, 'https://cdn.tgdd.vn/Products/Images/2002/302745/casper-tc-09is35-2-1.jpg'),
		(7, 'https://cdn.tgdd.vn/Products/Images/2002/302745/casper-tc-09is35-3.jpg'),
		(7, 'https://cdn.tgdd.vn/Products/Images/2002/302745/casper-tc-09is35-4.jpg'),
		(7, 'https://cdn.tgdd.vn/Products/Images/2002/302745/casper-tc-09is35-4.jpg'),
		(7, 'https://cdn.tgdd.vn/Products/Images/2002/302745/casper-tc-09is35-6.jpg'),

		(8, 'https://cdn.tgdd.vn/Products/Images/2002/303106/may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v1-2.jpg'),
		(8, 'https://cdn.tgdd.vn/Products/Images/2002/303106/may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v2-1.jpg'),
		(8, 'https://cdn.tgdd.vn/Products/Images/2002/303106/may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v3-1.jpg'),
		(8, 'https://cdn.tgdd.vn/Products/Images/2002/303106/may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v4-1.jpg'),
		(8, 'https://cdn.tgdd.vn/Products/Images/2002/303106/may-lanh-toshiba-inverter-1-hp-ras-h10z1kcvg-v5-1.jpg'),

		(9, 'https://cdn.tgdd.vn/Products/Images/2002/307167/tcl-inverter-1-hp-tac-10csd-xab1i-1.jpg'),
		(9, 'https://cdn.tgdd.vn/Products/Images/2002/307167/Slider/tcl-inverter-1-hp-tac-10csd-xab1i638301127288700456.jpg'),
		(9, 'https://cdn.tgdd.vn/Products/Images/2002/307167/tcl-inverter-1-hp-tac-10csd-xab1i-2.jpg'),
		(9, 'https://cdn.tgdd.vn/Products/Images/2002/307167/tcl-inverter-1-hp-tac-10csd-xab1i-3.jpg'),
		(9, 'https://cdn.tgdd.vn/Products/Images/2002/307167/tcl-inverter-1-hp-tac-10csd-xab1i-4.jpg'),

		(10, 'https://cdn.tgdd.vn/Products/Images/2002/272060/funiki-1-hp-hic09tmust3-2.jpg'),
		(10, 'https://cdn.tgdd.vn/Products/Images/2002/272060/Slider/01-1020x570-fix-1020x570.jpg'),
		(10, 'https://cdn.tgdd.vn/Products/Images/2002/272060/funiki-1-hp-hic09tmust3-3.jpg'),
		(10, 'https://cdn.tgdd.vn/Products/Images/2002/272060/funiki-1-hp-hic09tmust3-4.jpg'),
		(10, 'https://cdn.tgdd.vn/Products/Images/2002/272060/funiki-1-hp-hic09tmust3-5.jpg'),

		(11, 'https://cdn.tgdd.vn/Products/Images/1943/240703/Slider/120817-1020x570.jpg'),
		(11, 'https://cdn.tgdd.vn/Products/Images/1943/240703/Slider/panasonic-inverter-550-lit-nr-dz601vgkv-050821-1107211.png'),
		(11, 'https://cdn.tgdd.vn/Products/Images/1943/240703/panasonic-inverter-550-lit-nr-dz601vgkv-8-org.jpg'),
		(11, 'https://cdn.tgdd.vn/Products/Images/1943/240703/panasonic-inverter-550-lit-nr-dz601vgkv-13-org.jpg'),
		(11, 'https://cdn.tgdd.vn/Products/Images/1943/240703/panasonic-inverter-550-lit-nr-dz601vgkv-12-org.jpg'),
		
		(12, 'https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-1.jpg'),
		(12, 'https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-2-2.jpg'),
		(12, 'https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-3-2.jpg'),
		(12, 'https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-4-1.jpg'),
		(12, 'https://cdn.tgdd.vn/Products/Images/1943/319618/tu-lanh-lg-inverter-470-lit-multi-door-gr-b50bl-5.jpg'),
		
		(13, 'https://cdn.tgdd.vn/Products/Images/1943/307871/Slider/lg-gr-b256jds638216667253103233.jpg'),
		(13, 'https://cdn.tgdd.vn/Products/Images/1943/307871/Slider/lg-gr-b256jds638216667257173349.jpg'),
		(13, 'https://cdn.tgdd.vn/Products/Images/1943/307871/Slider/lg-gr-b256jds638216667258003283.jpg'),
		(13, 'https://cdn.tgdd.vn/Products/Images/1943/307871/Slider/lg-gr-b256jds638216667258813389.jpg'),
		(13, 'https://cdn.tgdd.vn/Products/Images/1943/307871/Slider/lg-gr-b256jds638216667259633304.jpg'),
		
		(14, 'https://cdn.tgdd.vn/Products/Images/1943/284851/Slider/tu-lanh-aqua-inverter-456-lit-aqr-m525xa(fb)638007604187206283.jpg'),
		(14, 'https://cdn.tgdd.vn/Products/Images/1943/284851/Slider/tu-lanh-aqua-inverter-456-lit-aqr-m525xa(fb)638007604134225944.jpg'),
		(14, 'https://cdn.tgdd.vn/Products/Images/1943/284851/Slider/tu-lanh-aqua-inverter-456-lit-aqr-m525xa(fb)638007603868094190.jpg'),
		(14, 'https://cdn.tgdd.vn/Products/Images/1943/284851/Slider/tu-lanh-aqua-inverter-456-lit-aqr-m525xa(fb)638007603817113795.jpg'),
		(14, 'https://cdn.tgdd.vn/Products/Images/1943/284851/Slider/tu-lanh-aqua-inverter-456-lit-aqr-m525xa(fb)638007603519331757.jpg'),
		
		(15, 'https://cdn.tgdd.vn/Products/Images/1943/201135/Slider/1-1020x570.jpg'),
		(15, 'https://cdn.tgdd.vn/Products/Images/1943/201135/Slider/2-1020x570.jpg'),
		(15, 'https://cdn.tgdd.vn/Products/Images/1943/201135/Slider/2-1020x570.jpg'),
		(15, 'https://cdn.tgdd.vn/Products/Images/1943/201135/Slider/2-1020x570.jpg'),
		(15, 'https://cdn.tgdd.vn/Products/Images/1943/201135/tu-lanh-samsung-rs62r5001m9-sv-2-org.jpg'),
		
		(16, 'https://cdn.tgdd.vn/Products/Images/1944/283843/Slider/10-1018x575.jpg'),
		(16, 'https://cdn.tgdd.vn/Products/Images/1944/283843/Slider/may-giat-panasonic-inverter-9.5-kg-na-v95fc1lvt638029195164725853.jpg'),
		(16, 'https://cdn.tgdd.vn/Products/Images/1944/283843/Slider/may-giat-panasonic-inverter-9.5-kg-na-v95fc1lvt638029195164725853.jpg'),
		(16, 'https://cdn.tgdd.vn/Products/Images/1944/283843/Slider/may-giat-panasonic-inverter-9.5-kg-na-v95fc1lvt638029195166555717.jpg'),
		(16, 'https://cdn.tgdd.vn/Products/Images/1944/283843/Slider/may-giat-panasonic-inverter-9.5-kg-na-v95fc1lvt638029195167465707.jpg'),

		(17, 'https://cdn.tgdd.vn/Products/Images/1944/239156/toshiba-7-kg-aw-l805av-sg-fix-1-1.jpg'),
		(17, 'https://cdn.tgdd.vn/Products/Images/1944/239156/toshiba-7-kg-aw-l805av-sg-fix-2-1.jpg'),
		(17, 'https://cdn.tgdd.vn/Products/Images/1944/239156/toshiba-7-kg-aw-l805av-sg-fix-3-1.jpg'),
		(17, 'https://cdn.tgdd.vn/Products/Images/1944/239156/toshiba-7-kg-aw-l805av-sg-4-1.jpg'),
		(17, 'https://cdn.tgdd.vn/Products/Images/1944/239156/toshiba-7-kg-aw-l805av-sg-5-1.jpg'),
		
		(18, 'https://cdn.tgdd.vn/Products/Images/1944/293579/Slider/may-giat-toshiba-8kg-aw-m905bvmk-1-1020x570.jpg'),
		(18, 'https://cdn.tgdd.vn/Products/Images/1944/293579/Slider/vi-vn-cong-nghe-may-giat-toshiba-8kg-aw-m905bvmk.jpg'),
		(18, 'https://cdn.tgdd.vn/Products/Images/1944/293579/Slider/may-giat-toshiba-8kg-aw-m905bvmk-0-4-1018x575.jpg'),
		(18, 'https://cdn.tgdd.vn/Products/Images/1944/293579/Slider/vi-vn-ve-sinh-long-giat-may-giat-toshiba-8kg-aw-m905bvmk.jpg'),
		(18, 'https://cdn.tgdd.vn/Products/Images/1944/293579/Slider/may-giat-toshiba-8kg-aw-m905bvmk-0-6-1020x570.jpg'),

		(19,'https://cdn.tgdd.vn/Products/Images/1944/313393/panasonic-82-kg-na-f82y01drv1.jpg'),
		(19,'https://cdn.tgdd.vn/Products/Images/1944/313393/panasonic-82-kg-na-f82y01drv2.jpg'),
		(19,'https://cdn.tgdd.vn/Products/Images/1944/313393/panasonic-82-kg-na-f82y01drv3.jpg'),
		(19,'https://cdn.tgdd.vn/Products/Images/1944/313393/panasonic-82-kg-na-f82y01drv4.jpg'),
		(19,'https://cdn.tgdd.vn/Products/Images/1944/313393/panasonic-82-kg-na-f82y01drv5.jpg'),
		
		(20,'https://cdn.tgdd.vn/Products/Images/1944/302751/Slider/may-giat-samsung-12kg-wa12cg5745bvsv638276204008922288.jpg'),
		(20,'https://cdn.tgdd.vn/Products/Images/1944/302751/Slider/may-giat-samsung-12kg-wa12cg5745bvsv638276204011022314.jpg'),
		(20,'https://cdn.tgdd.vn/Products/Images/1944/302751/Slider/may-giat-samsung-12kg-wa12cg5745bvsv638276204013032376.jpg'),
		(20,'https://cdn.tgdd.vn/Products/Images/1944/302751/Slider/giam-rung-may-giat-samsung-12kg-wa12cg5745bvsv-1018x575.jpg'),
		(20,'https://cdn.tgdd.vn/Products/Images/1944/302751/Slider/may-giat-samsung-12kg-wa12cg5745bvsv638276204014862360.jpg'),

		(21, 'https://cdn.tgdd.vn/Products/Images/1992/268451/dung-senko-dts1609-1.jpg'),
		(21, 'https://cdn.tgdd.vn/Products/Images/1992/268451/Slider/dung-senko-dts1609637981417228745945.jpg'),
		(21, 'https://cdn.tgdd.vn/Products/Images/1992/268451/Slider/dung-senko-dts1609637981417233146118.jpg'),
		(21, 'https://cdn.tgdd.vn/Products/Images/1992/268451/dung-senko-dts1609-2.jpg'),
		(21, 'https://cdn.tgdd.vn/Products/Images/1992/268451/dung-senko-dts1609-7.jpg'),

		(22, 'https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-2.jpg'),
		(22, 'https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-3.jpg'),
		(22, 'https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-4.jpg'),
		(22, 'https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-5.jpg'),
		(22, 'https://cdn.tgdd.vn/Products/Images/2062/239286/kangaroo-kg1b8-6.jpg'),

		(23, 'https://cdn.tgdd.vn/Products/Images/9418/275124/Slider/lo-chien-khong-dau-sunhouse-mama-shd4088-15-lit637928035769539356.jpg'),
		(23, 'https://cdn.tgdd.vn/Products/Images/9418/275124/Slider/lo-chien-khong-dau-sunhouse-mama-shd4088-15-lit637928035767599560.jpg'),
		(23, 'https://cdn.tgdd.vn/Products/Images/9418/275124/Slider/lo-chien-khong-dau-sunhouse-mama-shd4088-15-lit637928035766039701.gif'),
		(23, 'https://cdn.tgdd.vn/Products/Images/9418/275124/Slider/lo-chien-khong-dau-sunhouse-mama-shd4088-15-lit637928035764079802.jpg'),
		(23, 'https://cdn.tgdd.vn/Products/Images/9418/275124/Slider/lo-chien-khong-dau-sunhouse-mama-shd4088-15-lit637928035764079802.jpg'),

		(24, 'https://cdn.tgdd.vn/Products/Images/1989/210263/Slider/Tongquan-1-780x433.jpg'),
		(24, 'https://cdn.tgdd.vn/Products/Images/1989/210263/Slider/vi-vn-thiet-ke-(1).jpg'),
		(24, 'https://cdn.tgdd.vn/Products/Images/1989/210263/Slider/vi-vn-dung-tich-(1).jpg'),
		(24, 'https://cdn.tgdd.vn/Products/Images/1989/210263/Slider/congsuat-780x433.jpg'),
		(24, 'https://cdn.tgdd.vn/Products/Images/1989/210263/Slider/vi-vn-ruot-binh-(1).jpg'),

		(25, 'https://cdn.tgdd.vn/Products/Images/1985/274453/philips-hr2041-10-2.jpg'),
		(25, 'https://cdn.tgdd.vn/Products/Images/1985/274453/philips-hr2041-10-4.jpg'),
		(25, 'https://cdn.tgdd.vn/Products/Images/1985/274453/philips-hr2041-10-5.jpg'),
		(25, 'https://cdn.tgdd.vn/Products/Images/1985/274453/philips-hr2041-10-7.jpg'),
		(25, 'https://cdn.tgdd.vn/Products/Images/1985/274453/philips-hr2041-10-2--2.jpg'),

		(26, 'https://cdn.tgdd.vn/Products/Images/3385/281701/Slider/ro-nong-lanh-karofi-kad-x60637922892990879746--1--1020x570-1020x570.jpg'),
		(26, 'https://cdn.tgdd.vn/Products/Images/3385/281701/Slider/ro-nong-lanh-karofi-kad-x60637922892986762277.jpg'),
		(26, 'https://cdn.tgdd.vn/Products/Images/3385/281701/Slider/ro-nong-lanh-karofi-kad-x60637922892984919060.gif'),
		(26, 'https://cdn.tgdd.vn/Products/Images/3385/281701/Slider/vi-vn-ro-nong-lanh-karofi-kad-x60-chuanqg.jpg'),
		(26, 'https://cdn.tgdd.vn/Products/Images/3385/281701/Slider/ro-nong-lanh-karofi-kad-x60637922892979888680.jpg'),

		(27, 'https://cdn.tgdd.vn/Products/Images/3385/309481/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-1a.jpg'),
		(27, 'https://cdn.tgdd.vn/Products/Images/3385/309481/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-3a-1020x570.jpg'),
		(27, 'https://cdn.tgdd.vn/Products/Images/3385/309481/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-3b-1020x570.jpg'),
		(27, 'https://cdn.tgdd.vn/Products/Images/3385/309481/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-5a.jpg'),
		(27, 'https://cdn.tgdd.vn/Products/Images/3385/309481/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-4a-1020x570.jpg'),

		(28, 'https://cdn.tgdd.vn/Products/Images/3385/322078/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-hydrogen-kangaroo-kg12a8-12-loi-1.jpg'),
		(28, 'https://cdn.tgdd.vn/Products/Images/3385/322078/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-hydrogen-kangaroo-kg12a8-12-loi-2.jpg'),
		(28, 'https://cdn.tgdd.vn/Products/Images/3385/322078/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-hydrogen-kangaroo-kg12a8-12-loi-3.jpg'),
		(28, 'https://cdn.tgdd.vn/Products/Images/3385/322078/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-hydrogen-kangaroo-kg12a8-12-loi-4.jpg'),
		(28, 'https://cdn.tgdd.vn/Products/Images/3385/322078/Slider/vi-vn-may-loc-nuoc-ro-nong-nguoi-lanh-hydrogen-kangaroo-kg12a8-12-loi-5.jpg'),

		(29, 'https://cdn.tgdd.vn/Products/Images/3385/299901/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-sunhouse-sha76219ck-10-loi638095651776578087.jpg'),
		(29, 'https://cdn.tgdd.vn/Products/Images/3385/299901/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-sunhouse-sha76219ck-10-loi638095651796468095.jpg'),
		(29, 'https://cdn.tgdd.vn/Products/Images/3385/299901/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-sunhouse-sha76219ck-10-loi638095651805638076.jpg'),
		(29, 'https://cdn.tgdd.vn/Products/Images/3385/299901/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-sunhouse-sha76219ck-10-loi638095651816148100.jpg'),
		(29, 'https://cdn.tgdd.vn/Products/Images/3385/299901/Slider/may-loc-nuoc-ro-nong-nguoi-lanh-sunhouse-sha76219ck-10-loi638095651816148100.jpg'),

		(30, 'https://cdn.tgdd.vn/Products/Images/3385/270214/Slider/vi-vn-ro-robot-spring-x10gur-10-loi-1.jpg'),
		(30, 'https://cdn.tgdd.vn/Products/Images/3385/270214/Slider/vi-vn-ro-robot-spring-x10gur-10-loi-6.jpg'),
		(30, 'https://cdn.tgdd.vn/Products/Images/3385/270214/Slider/vi-vn-ro-robot-spring-x10gur-10-loi-3.jpg'),
		(30, 'https://cdn.tgdd.vn/Products/Images/3385/270214/Slider/vi-vn-ro-robot-spring-x10gur-10-loi-5.jpg'),
		(30, 'https://cdn.tgdd.vn/Products/Images/3385/270214/Slider/vi-vn-ro-robot-spring-x10gur-10-loi-4.jpg');