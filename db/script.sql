create table post (
	idpost serial,
	title varchar (300),
	body text
	constraint idpost primary key
);

drop table post;
insert into post values (DEFAULT, 'First post', 'First Body');
insert into post values (DEFAULT, 'Second post', 'Second Body');
insert into post values (DEFAULT, 'Third post', 'Third Body');
insert into post values (DEFAULT, 'Fourth post', 'Fourth Body');
insert into post values (DEFAULT, 'Fifth post', 'Fifth Body');

insert into post values (DEFAULT, 'skjdskjdk', 'dkjflkdfjdkslj')

insert into post values (DEFAULT, 'awq', 'asasasassasaa')

delete from post where idpost = 1
SELECT * FROM post WHERE idpost = 17
select * from post;


DELETE FROM post WHERE idpost = 45454
insert into post (100, 'teste','teste')

update post set title = 'title test', body = 'body test' where idpost = 5

