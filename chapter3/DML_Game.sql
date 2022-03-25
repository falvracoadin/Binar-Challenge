--menambahkan beberapa data user pada tabel user_game
insert into user_game(username, "password")
    values(
        'adinaelah',
        'adin1234'
    );

insert into user_game(username, "password")
    values(
        'zeezeezee',
        'zeeeeeee'
    );

insert into user_game(username, "password")
    values(
        'loopuubiie',
        'sayagamer123'
    );

insert into user_game(username, "password")
    values(
        'xalantic',
        'belajar1234'
    );

--menambahkan beberapa data user_game_biodata
insert into user_game_biodata(user_game_id, birth_date, birth_place)
    values(
        (select id
        from user_game
        where username = 'adinaelah'),
        '2000-08-29',
        'Tuban'
    );

insert into user_game_biodata(user_game_id, birth_date, birth_place)
    values(
        (select id
        from user_game
        where username = 'zeezeezee'),
        '2001-03-02',
        'Malang'
    );

insert into user_game_biodata(user_game_id, birth_date, birth_place)
    values(
        (select id
        from user_game
        where username = 'loopuubiie'),
        '2001-05-02',
        'Malang'
    );

insert into user_game_biodata(user_game_id, birth_date, birth_place)
    values(
        (select id
        from user_game
        where username = 'xalantic'),
        '2002-05-19',
        'Surabaya'
    );

--menambahkan data pada table stage
insert into stage(name, difficulty)
    values  ('stage-1', 1),
            ('stage-2', 2),
            ('stage-3', 3),
            ('stage-4', 4),
            ('stage-5', 5),
            ('stage-6', 6),
            ('stage-7', 7),
            ('stage-8', 8),
            ('stage-9', 9),
            ('stage-10', 10);

--menambahkan data pada table user_game_history
insert into user_game_history(user_game_id, stage_id, "timestamp", score)
    values  (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 1),
                (select now() - interval '1 DAY 12 Hour'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 2),
                (select now() - interval '1 DAY 10 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 3),
                (select now() - interval '1 DAY 5 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 4),
                (select now() - interval '1 DAY 4 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 5),
                (select now() - interval '1 DAY 2 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 6),
                (select now() - interval '1 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 7),
                (select now() - interval '20 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 8),
                (select now() - interval '15 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 8),
                (select now() - interval '10 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 9),
                (select now() - interval '5 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'adinaelah'),
                (select id from stage where difficulty = 10),
                (select now() - interval '1 HOUR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 1),
                (select now() - interval '1 YEAR'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 2),
                (select now() - interval '11 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 3),
                (select now() - interval '10 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 4),
                (select now() - interval '9 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 4),
                (select now() - interval '9 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'zeezeezee'),
                (select id from stage where difficulty = 5),
                (select now() - interval '9 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 1),
                (select now() - interval '3 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 1),
                (select now() - interval '3 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 2),
                (select now() - interval '2 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 2),
                (select now() - interval '2 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 2),
                (select now() - interval '1 MONTH 15 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'loopuubiie'),
                (select id from stage where difficulty = 3),
                (select now() - interval '1MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 1),
                (select now() - interval '12 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 2),
                (select now() - interval '5 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 3),
                (select now() - interval '3 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 4),
                (select now() - interval '2 MONTH'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 5),
                (select now() - interval '1 MONTH 29 Day'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 6),
                (select now() - interval '1 MONTH 14 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 7),
                (select now() - interval '1 MONTH 3 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 8),
                (select now() - interval '1 MONTH 1 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 9),
                (select now() - interval '20 DAY'),
                (select random() * 1000)
            ),
            (
                (select id from user_game where username = 'xalantic'),
                (select id from stage where difficulty = 10),
                (select now()),
                (select random() * 1000)
            );

-- melihat data user_game
select * from user_game;

-- melihat data stage
select * from stage;

-- melihat data biodata user
select user_game.id, user_game.username, user_game_biodata.birth_date, user_game_biodata.birth_place
    from user_game
    join user_game_biodata
        on user_game.id = user_game_biodata.user_game_id;

-- melihat history pengguna
select user_game.id, user_game.username, stage.name, stage.difficulty, user_game_history."timestamp", user_game_history.score
    from user_game
    join user_game_history
        on user_game.id = user_game_history.user_game_id
    join stage
        on user_game_history.stage_id = stage.id;


-- melihat skor tertinggi pada setiap stage
select stage.name, max(user_game_history.score) as high_score
    from user_game_history
    join stage
        on stage.id = user_game_history.stage_id
    group by stage.id
    order by stage.id;

-- melihat data pengguna dari skor tertinggi pada stage tertentu
select user_game.id, user_game.username
    from user_game
    join user_game_history
        on user_game.id = user_game_history.user_game_id
    join stage
        on user_game_history.stage_id = stage.id
    where stage.name = 'stage-2'
        and user_game_history.score = (
            select max(user_game_history.score) as high_score
                from user_game_history
                join stage
                    on stage.id = user_game_history.stage_id
                where stage.name = 'stage-2'
                group by stage.id
        );

-- mengupdate data pada pengguna tertentu
update user_game
    set username = 'adinaelah2'
    where username = 'adinaelah';

-- mengupadate biodata pengguna
update user_game_biodata
    set birth_place = 'Jakarta'
    where user_game_id = (
        select id
        from user_game
        where user_game.username = 'adinaelah2'
    );

-- delete user game
delete from user_game 
    where user_game.username = 'adinaelah2';