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

select * from post order by idpost;


