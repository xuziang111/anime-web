const index = Vue.component('index', {
    template: `
            <div>
                <aside id="anime-aside">
                <ul>
                    <li><a href="#">时间表</a></li>
                    <li><a href="#">新番更新</a></li>
                    <li><a href="#">历年动画</a></li>
                    <li><a href="#">剧场ova</a></li>
                </ul>
            </aside>
                <section class="timetable">
                <!-- Nav tabs -->
                <ul id="timetablelist" class="nav nav-tabs" role="tablist">
                    <li role="presentation"><a href="#Monday" aria-controls="Monday" role="tab" data-toggle="tab">周一</a>
                    </li>
                    <li role="presentation"><a href="#Tuesday" aria-controls="Tuesday" role="tab"
                                               data-toggle="tab">周二</a></li>
                    <li role="presentation"><a href="#Wednesday" aria-controls="Wednesday" role="tab" data-toggle="tab">周三</a>
                    </li>
                    <li role="presentation"><a href="#Thursday" aria-controls="Thursday" role="tab"
                                               data-toggle="tab">周四</a></li>
                    <li role="presentation"><a href="#Friday" aria-controls="Friday" role="tab" data-toggle="tab">周五</a>
                    </li>
                    <li role="presentation"><a href="#Saturday" aria-controls="Saturday" role="tab"
                                               data-toggle="tab">周六</a></li>
                    <li role="presentation"><a href="#Sunday" aria-controls="Sunday" role="tab" data-toggle="tab">周日</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="Monday">
                        <ul class="time-ul">
                            <p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Tuesday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Wednesday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Thursday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Friday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Saturday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="Sunday">
                        <ul class="time-ul"><p>...</p>
                        </ul>
                    </div>
                </div>
            </section>

                <section class="text-left rmxf">
                <h4><span class="icon-rmxf"></span>日漫新番</h4>
                <div class="big-screen">
                    <ul>
                        <li class="big-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div><p>青春猪头少年不会梦到兔女郎学姐</p></div>
                            </div>
                        </li>
                        <ul>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                            <li class="small-wrapper">
                                <div>
                                    <div><img height="100%" width="100%"
                                              src="./Images/a_100158493_m_601_m4_480_360.jpg"></div>
                                    <div>青春猪头少年不会梦到兔女郎学姐</div>
                                </div>
                            </li>
                        </ul>
                    </ul>
                    <ul class="ul-sec">
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="small-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sm-screen">
                    <ul>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                        <li class="xs-wrapper">
                            <div>
                                <div><img height="100%" width="100%" src="./Images/a_100158493_m_601_m4_480_360.jpg">
                                </div>
                                <div>青春猪头少年不会梦到兔女郎学姐</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            </div>
    `
})